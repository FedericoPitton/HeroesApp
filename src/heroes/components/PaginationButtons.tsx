export const PaginationButtons = ({ page, totalPages, setPage }: any) => {
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const renderPageButtons = () => {
        const buttons = [];

        const maxButtons = 4;
        const middleIndex = Math.ceil(maxButtons / 2);
        let startPage = page - middleIndex + 1;
        let endPage = page + middleIndex - 1;

        if (startPage < 1) {
            endPage += Math.abs(startPage) + 1;
            startPage = 1;
        }

        if (endPage > totalPages) {
            startPage -= endPage - totalPages;
            endPage = totalPages;
        }

        if (startPage > 1){
            buttons.push(
                <li key="start-page" className="page-item">
                    <a className="page-link" onClick={() => handlePageChange(1)} style={{ cursor: 'pointer' }}>
                        1
                    </a>
                </li>
            );
        }
        if (startPage > 1) {
            buttons.push(
                <li key="ellipsis-start" className="page-item">
                    <a className="page-link" onClick={() => handlePageChange(startPage - 1)} style={{ cursor: 'pointer' }}>
                        ...
                    </a>
                </li>
            );
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
                    <a className="page-link" onClick={() => handlePageChange(i)} style={{ cursor: 'pointer' }}>
                        {i}
                    </a>
                </li>
            );
        }

        if (endPage < totalPages) {
            buttons.push(
                <li key="ellipsis-end" className="page-item">
                    <a className="page-link" onClick={() => handlePageChange(endPage + 1)} style={{ cursor: 'pointer' }}>
                        ...
                    </a>
                </li>
            );
        }
        
        if (endPage < totalPages){
            buttons.push(
                <li key="total-pages" className="page-item">
                    <a className="page-link" onClick={() => handlePageChange(totalPages)} style={{ cursor: 'pointer' }}>
                        {totalPages}
                    </a>
                </li>
            );
        }

        return buttons;
    };

    const showButtons = totalPages >= 3;

    return (
        <nav aria-label="...">
            <ul className="pagination mt-4">
                {/* <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => handlePageChange(page - 1)} style={{ cursor: 'pointer' }}>
                        Previous
                    </a>
                </li> */}
                {showButtons && renderPageButtons()}
                {/* <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => handlePageChange(page + 1)} style={{ cursor: 'pointer' }}>
                        Next
                    </a>
                </li> */}
            </ul>
        </nav>
    );
};
