import styles from 'Read.module.css'

const Read3 = ({ menus }) => {

    return (
        <div className={styles.body}>
            <div>
                <table border={1} align='center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.price}</td>
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

export default Read3;