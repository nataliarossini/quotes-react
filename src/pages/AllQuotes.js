import QuoteList from '../components/quotes/QuoteList'

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
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
}
export default AllQuotes;