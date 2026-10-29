import styles from 'Read.module.css'

const Read = ({ stocks }) => {

    return (
        <div className={styles.body}>
            <div>
                <table border={1} align='center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>STOCK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stocks.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.stock}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Read;