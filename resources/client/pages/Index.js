import { Counter } from "./../components/common/Counter";

const IndexPage = (props) => {
    return (
        <div className="container container_size-medium">
            <div className="bp4-running-text">
                <h1 className="bp4-heading">Hello world!</h1>

                <p>This is my new template for web applications.</p>
                <p>
                    I'm tired of using Express.js without any presetted codebase, 
                    and writting project architecture from scratch over and over when I starts to code something new.
                </p>
                <p>
                    So I decided try to change stack, and find something cool, that makes web applications development 
                    more faster and comfortable. And...
                </p>

                <h3>This is new technology stack</h3>

                <p className="bp4-text-large">Frontend:</p>
                <ul>
                    <li><strong>React.js</strong> as a UI framework</li>
                    <li><strong>Blueprint.js</strong> as components library and CSS framework</li>
                    <li><strong>Teaful</strong> for state management</li>
                    <li><strong>webpack-mix</strong> for building assets</li>
                </ul>

                <p className="bp4-text-large">Backend:</p>
                <ul>
                    <li><strong>Adonis.js</strong> as a framework</li>
                    <li>...and <strong>it's ecosystem</strong> for each other things</li>
                </ul>
            </div>

            <div style={{ marginTop: "30px" }}>
                <div className="bp4-text-large">And here simple counter component example: </div>

                <Counter/>
            </div>
        </div>
    )
}

export default IndexPage;