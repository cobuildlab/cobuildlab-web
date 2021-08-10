import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import BlogList from './blog-post/BlogList';
import BlogListAI from './blog-ai/BlogListAI';
import PropTypes from 'prop-types';

/**
 * @param {object} props - The Object props.
 * @returns {*} - The Component.
 * @class
 */
function Paginator(props) {
  let queryResult = null;

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const BlogAi = props.blogAi;
  const ActiveTag = props.activeTag;
  const PostsPerPage = 15;

  useEffect(() => {
    setPosts(props.data);
  }, [props]);

  const pagesVisited = currentPage * PostsPerPage;

  queryResult = posts.slice(pagesVisited, pagesVisited + PostsPerPage);
  const pageCount = Math.ceil(posts.length / PostsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mt-5 App">
      {BlogAi ? (
        <BlogListAI data={queryResult} />
      ) : (
        <BlogList data={queryResult} activeTag={ActiveTag} />
      )}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link previousBttn'}
        nextLinkClassName={'page-link nextBttn'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        disabledClassName={'disabled'}
        activeClassName={'active paginationActive'}
      />
    </div>
  );
}

Paginator.defaultProps = {
  blogAi: false,
  activeTag: false,
};

Paginator.propTypes = {
  data: PropTypes.array.isRequired,
  blogAi: PropTypes.bool,
  activeTag: PropTypes.bool,
};

export default Paginator;
