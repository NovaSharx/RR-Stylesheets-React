import GrandChild from "./Grandchild";

function Child() {
    const styledText = {
        fontSize: "25px",
        textAlign: "center",
        margin: "40px",
        border: "1px solid green"
    }

    return (
        <div className="Child">
            <h1>Child</h1>
            <div style={styledText} >
                <GrandChild />
            </div>
        </div>
    );
}

export default Child;