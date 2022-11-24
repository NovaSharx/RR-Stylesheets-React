import GrandChild from "./Grandchild";

function Child() {
    const styledText = {
        fontSize: "20px",
        textAlign: "center",
        margin: "40px",
        border: "1px solid green",
        color: "blue"
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