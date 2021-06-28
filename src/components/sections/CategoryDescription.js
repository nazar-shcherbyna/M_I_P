import {useParams} from 'react-router-dom';

export default function CategoryDescription() {
    let {categoryName} = useParams();
    return (
        <>
            <a href='/category'>Back</a>
            <h1>Category: {categoryName}</h1>
        </>
    )
}