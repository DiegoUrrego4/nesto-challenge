import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SpinnerDotted } from 'spinners-react';
import { useApplicationsList } from '../hooks/useApplicationsList';
import { usePagination } from '../hooks/usePagination';
import { EmptyState } from '../components/EmptyState/EmptyState';
import styles from './ApplicationsListPage.module.scss';

export const ApplicationsListPage = () => {
  const { t } = useTranslation();
  const { applications, isLoading, error } = useApplicationsList();
  const itemsPerPage = Number(import.meta.env.VITE_PAGINATION_ITEMS_PER_PAGE) || 5;
  const {
    currentData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(applications, itemsPerPage);

  if (isLoading) {
    return <SpinnerDotted className={styles.centeredMessage} color="red" />;
  }

  if (error) {
    return <div className={styles.centeredMessageError}>{error}</div>;
  }

  if (applications.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.listContainer}>
      <h1>{t('list.title')}</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.appsTable}>
          <thead>
            <tr>
              <th>{t('list.table.name')}</th>
              <th>{t('list.table.email')}</th>
              <th>{t('list.table.phone')}</th>
              <th>{t('list.table.product')}</th>
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
                    {t('list.table.edit')}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className={styles.paginationControls}>
          <button onClick={prevPage} disabled={!canPrevPage}>
            {t('list.pagination.previous')}
          </button>
          <span>{t('list.pagination.page', { currentPage, totalPages })}</span>
          <button onClick={nextPage} disabled={!canNextPage}>
            {t('list.pagination.next')}
          </button>
        </div>
      )}
    </div>
  );
};