import { ENDPOINTS } from './api/endpoints';
import './App.css'
import useData from './hooks/useData'
import type { Users } from './types';



function App() {
  const { data, loading, error } = useData<Users>(ENDPOINTS.USERS);

  console.log({ data, loading, error })

  return (
    <>
      <pre>
        loading: {JSON.stringify(loading, null, 2)} -
        error: {JSON.stringify(error, null, 2)} -
        data: {JSON.stringify(data, null, 2)} -
      </pre>
      {/* {data?.map(e => e.postId)} */}
    </>
  )
}

export default App
