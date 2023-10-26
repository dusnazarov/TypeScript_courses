
import Heading from "./components/Heading"
import {Section} from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

function App() {


  return (
    <>
      <Heading title={"Hello"}/>
      <Section title={"Different Title"}>This is my Section.</Section>
      <Counter />
      <List items={["coffee", "Tacos", "code"]} render={(item: string) => <span className="bold">{item}</span>}/>
    </>
  )
}

export default App
