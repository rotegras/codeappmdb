import React from 'react'
import PropTypes from 'prop-types'

const LastEntry = ({data}) => {

<<<<<<< HEAD
    let lastel = {};
    let tags = [];
=======
    // const lastel = data.sort(a,b) => {
        // let last = a.createdAt.localeCompare(b.createdAt);
        // return last.pop();
    // }
>>>>>>> 200212_modal2


    let lastEl = [];
    // let tags = [];


    // let ordered =  data.sort((a,b) => {

    // let lastel = data.sort(a,b) => {
    // let getLast = data.sort((a,b) => {
        // return a.updatedAt.localeCompare(b.updatedAt)
        // lastEl = a.createdAt.localeCompare(b.createdAt);
        // return lastEl.pop();
    // });
    // console.log(getLast);

    // const [lastel, setLast] = React.useState(getLast);

    // let ordered = data.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1).pop();
    // let lastel = data.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1).pop();

    // console.log(ordered.pop(), 'ordered')
    // if ( ordered.length ) {
        // lastel = ordered.pop();

<<<<<<< HEAD
        tags = lastel.tags.map(tag => {
            return <li>{tag}</li>
        })
    }
=======
        // console.log('lastel', lastel.tags.map(tag => ({tag})));

        // tags = lastel.tags.map(tag => {
            // return <li>{tag}</li>
        // })
    // }
>>>>>>> 200212_modal2

    return (
        <div>
            <h5>LAST ENTRY</h5>
            <div className="mb-1">{lastEl.name}</div>
            <div className="line-break text-success">{lastEl.code}</div>
            <ul className="mt-0">
<<<<<<< HEAD
                Tags: {tags}
=======
                {/* Tags: {tags} */}
>>>>>>> 200212_modal2
            </ul>
            <div className="mt-1">Updated at: {lastEl.updatedAt}</div>
            <div className="mt-0">id: {lastEl.id}</div>
            <div className="mt-0">_id: {lastEl._id}</div>
        </div>
    );
}

LastEntry.propTypes = {
    data: PropTypes.array
}

export default LastEntry