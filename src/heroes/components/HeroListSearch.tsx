import React from 'react'
import { ISuperhero } from '../helpers'
import { HeroCard } from './HeroCard'
import { PaginationButtons } from './PaginationButtons'

interface HeroListSearchProps {
    searchResults: ISuperhero[];
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

export const HeroListSearch = ({ searchResults, page, totalPages, setPage }: HeroListSearchProps) => {
    return (
        <div className="d-flex flex-column align-items-center mt-4 mb-4">
            <div className='row'>

                {searchResults.map((hero: ISuperhero, index) => (
                    <div className="col-12 col-md-12 col-lg-6 g-3" key={index}>
                        <HeroCard key={hero.id} {...hero} />
                    </div>
                ))}

            </div>

            {totalPages > 1 && (
                <PaginationButtons page={page} totalPages={totalPages} setPage={setPage} />
            )}

        </div>
    );
};
