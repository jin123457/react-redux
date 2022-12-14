import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text} />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    );
}

function mapStateToProps(state, ownprops) {
    return { toDos: state };
}

export default connect(mapStateToProps)(Home);
