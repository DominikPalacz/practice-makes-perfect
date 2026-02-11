import './App.css'
import { useAlbumsData, useCommentsData, usePhotosData, usePostsData, useTodosData, useUsersData } from './hooks/useDomainHooks';

function App() {
  const { data: AlbumsData, loading: loadingAlbums, error: errorAlbums } = useAlbumsData();
  const { data: CommentsData, loading: loadingComments, error: errorComments } = useCommentsData();
  const { data: PhotosData, loading: loadingPhotos, error: errorPhotos } = usePhotosData();
  const { data: PostsData, loading: loadingPosts, error: errorPosts } = usePostsData();
  const { data: TodosData, loading: loadingTodos, error: errorTodos } = useTodosData();
  const { data: UsersData, loading: loadingUsers, error: errorUsers } = useUsersData();

  console.log({ AlbumsData, loadingAlbums, errorAlbums })
  console.log({ CommentsData, loadingComments, errorComments })
  console.log({ PhotosData, loadingPhotos, errorPhotos })
  console.log({ PostsData, loadingPosts, errorPosts })
  console.log({ TodosData, loadingTodos, errorTodos })
  console.log({ UsersData, loadingUsers, errorUsers })

  return (
    <>
      <pre>
        {JSON.stringify(AlbumsData, null, 2)}
        {JSON.stringify(CommentsData, null, 2)}
        {JSON.stringify(PhotosData, null, 2)}
        {JSON.stringify(PostsData, null, 2)}
        {JSON.stringify(TodosData, null, 2)}
        {JSON.stringify(UsersData, null, 2)}
      </pre>
    </>
  )
}

export default App
