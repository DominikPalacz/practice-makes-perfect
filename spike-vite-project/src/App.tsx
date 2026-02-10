import { ENDPOINTS } from './api/endpoints';
import './App.css'
import useData from './hooks/useData'
import type { TodoList } from './types/todo'

function App() {
  const { data, loading, error } = useData<TodoList>(ENDPOINTS.POST);

  console.log({ data, loading, error })

  return (
    <>
      <pre>
        loading: {JSON.stringify(loading, null, 2)} -
        error: {JSON.stringify(error, null, 2)} -
      </pre>
      {data?.map((e) => ' ' + e.id)}
    </>
  )
}

export default App
