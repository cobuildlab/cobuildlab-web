import React, { Component } from 'react';
import * as JsSearch from 'js-search';

import { Icon } from 'react-icons-kit';
import { search as searchIcon } from 'react-icons-kit/fa/search';

import BlogList from '../BlogList';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section, Columns } from 'bloomer';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledForm = styled.form`
  padding-bottom: 35px;
`;

const StyledInput = styled.input`
  color: #264a60;
  border: 1px solid #264a60;
  margin: 0 auto;
  width: 50vw;
  background-color: #fff;
  text-indent: 35px;
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-left: 24%;
  position: absolute;
  margin-top: 10px;
  color: #264a60;
  @media (min-width: 1380px) {
    margin-left: 15%;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
`;

class ClientSearch extends Component {
  state = {
    postList: [],
    search: [],
    searchResults: [],
    isError: false,
    searchQuery: ``,
  };
  /**
   * React lifecycle method to fetch the data.
   */
  async componentDidMount() {
    const { post } = this.props;
    if (post !== null) {
      this.setState({ postList: post });
      this.rebuildIndex(post);
    }
  }

  /**.
   * Rebuilds the overall index based on the options
   *
   * @param {Array} post - List post.
   */
  rebuildIndex = (post) => {
    const dataToSearch = new JsSearch.Search(`slug`);

    /**
     *  Defines a indexing strategy for the data
     * more more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy.
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();

    /**.
     * Defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();

    /**
     * Defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index.
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(`slug`);

    dataToSearch.addIndex(`title`); // sets the index attribute for the data

    dataToSearch.addDocuments(post); // adds the data to be searched
    this.setState({ search: dataToSearch });
  };

  /**
   * Handles the input change and perform a search with js-search
   * in which the results will be added to the state.
   *
   * @param {HTMLElement} e - Element html.
   */

  searchData = (e) => {
    const { search } = this.state;
    const queryResult = search.search(e.target.value);

    this.setState({ searchQuery: e.target.value, searchResults: queryResult });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { postList, searchResults, searchQuery } = this.state;
    const queryResults = searchQuery === `` ? postList : searchResults;

    return (
      <>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledContainer>
            <StyledDiv>
              {searchQuery === '' ? <StyledIcon icon={searchIcon} /> : null}
              <StyledInput
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Discover news articles and more..."
                autoComplete={'off'}
              />
            </StyledDiv>
          </StyledContainer>
        </StyledForm>
        <Section isPaddingless>
          <Columns isMultiline>
            {queryResults.length === 0 ? (
              <>
                <h1>No article found ....</h1>
              </>
            ) : (
              <BlogList data={queryResults} />
            )}
          </Columns>
        </Section>
      </>
    );
  }
}

ClientSearch.propTypes = {
  post: PropTypes.array.isRequired,
};

export default ClientSearch;
