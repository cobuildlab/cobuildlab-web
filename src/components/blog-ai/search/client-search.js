import React, { Component } from 'react';
import * as JsSearch from 'js-search';
import BlogList from '../BlogList';
import PropTypes from 'prop-types';

class ClientSearch extends Component {
  state = {
    bookList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: ``,
  };
  /**
   * React lifecycle method to fetch the data.
   */
  async componentDidMount() {
    const { post } = this.props;
    if (post !== null) {
      this.setState({ bookList: post });
      this.rebuildIndex(post);
    }
  }

  /**.
   * Rebuilds the overall index based on the options
   *
   * @param post
   */
  rebuildIndex: ClientSearch.rebuildIndex = (post) => {
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
    this.setState({ search: dataToSearch, isLoading: false });
  };

  /**
   * Handles the input change and perform a search with js-search
   * in which the results will be added to the state.
   *
   * @param e
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
    const { isLoading, bookList, searchResults, searchQuery } = this.state;
    const queryResults = searchQuery === `` ? bookList : searchResults;

    if (isLoading) {
      return (
        <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
          <h1 style={{ marginTop: `3em`, textAlign: `center` }}>Getting the search all setup</h1>
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ paddingBottom: '10px' }}>
          <div style={{ width: '90vw' }}>
            <input
              id="Search"
              value={searchQuery}
              onChange={this.searchData}
              placeholder="Enter your search here"
              style={{
                color: '#264a60',
                borderBottom: '1px solid #264a60',
                margin: '0 auto',
                width: '50vw',
              }}
            />
          </div>
        </form>
        <div>
          <BlogList data={queryResults} />
        </div>
      </div>
    );
  }
}

ClientSearch.propTypes = {
  post: PropTypes.array.isRequired,
};

export default ClientSearch;
