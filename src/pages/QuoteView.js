import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'name',
        text: 'lorem ipsum'
    },
    {
        id: 'q2',
        author: 'other name',
        text: 'lorem ipsum dolor'
    }
];

const QuoteView = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
    
    if (!quote) {
        return <p>No quote found</p>
    }
    
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <h1>Quote View</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};
export default QuoteView;