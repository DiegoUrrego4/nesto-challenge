import { Link } from 'react-router-dom';
import { useApplicationsList } from '../hooks';
import { EmptyState } from '../components';
import {SpinnerDotted} from "spinners-react";
import styles from './ApplicationsListPage.module.scss';

export const ApplicationsListPage = () => {
    const { applications, isLoading, error } = useApplicationsList();

    if (isLoading) {
        return <SpinnerDotted className={styles.centered} color="red" />;
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
                {applications.map((app) => (
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
        </div>
    );
};