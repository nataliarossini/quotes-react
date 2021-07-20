import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
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
    const match = useRouteMatch();
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
    
    if (!quote) {
        return <p>No quote found</p>
    }
    
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Comments</Link>
                </div>

            </Route>
            <h1>Quote View</h1>
            <p>{params.quoteId}</p>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};
export default QuoteView;