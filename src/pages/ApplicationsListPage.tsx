import { Link } from 'react-router-dom';
import { useApplicationsList } from '../hooks/useApplicationsList';
import { usePagination } from '../hooks/usePagination';
import { EmptyState } from '../components/EmptyState/EmptyState';
import styles from './ApplicationsListPage.module.scss';

export const ApplicationsListPage = () => {
  const { applications, isLoading, error } = useApplicationsList();
  const {
    currentData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(applications, 5);

  if (isLoading) {
    return <div className={styles.centeredMessage}>Loading applications...</div>;
  }

  if (error) {
    return <div className={styles.centeredMessageError}>{error}</div>;
  }

  if (applications.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.listContainer}>
      <table className={styles.appsTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Product</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((app) => (
            <tr key={app.id}>
              <td>{`${app.applicants[0].firstName} ${app.applicants[0].lastName}`}</td>
              <td>{app.applicants[0].email}</td>
              <td>{app.applicants[0].phone}</td>
              <td>{app.productName}</td>
              <td>
                <Link to={`/application/${app.id}`} className={styles.editButton}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className={styles.paginationControls}>
          <button onClick={prevPage} disabled={!canPrevPage}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={!canNextPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};