import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

//Unit test cases for Pagination Component
describe('Pagination test suite',()=>{
    test('check Pagination button',()=>{
        render(<Pagination totalData={20} itemsPerPage={5} currentPage={1}/>);
 
        const poweredByLink = screen.getAllByTestId("pagination-btn");
        expect(poweredByLink[0]).toHaveAttribute("class");
    })
})
