import { Input, Pagination } from 'antd';

import CardList from '../../components/CardsList';
import Loader from '../../components/Loader';

const tabSearch = (
  isLoaded,
  search,
  cards,
  genres,
  guestSession,
  totalPages,
  pages,
  sevSearch,
  onChangeSearch,
  movieService
) => {
  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <>
      <Input className="input-search" onChange={onChangeSearch} placeholder="Type to search..." value={search } />
      <CardList className="card-list" cards={cards} genres={genres} guestSession={guestSession} />
      <Pagination
        className="pagination"
        size="small"
        total={totalPages}
        defaultCurrent={pages}
        showSizeChanger={false}
        hideOnSinglePage
        onChange={(page) => {
          sessionStorage.setItem('pages', `${page}`)
          movieService();
        }}
      />
    </>
  );
};

export default tabSearch;
