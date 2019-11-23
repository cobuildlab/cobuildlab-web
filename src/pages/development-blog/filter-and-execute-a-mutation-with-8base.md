---
title: Filter and Execute a Mutation with 8base
date: 2019-22-16T01:00:00+00:00
tags:
template: development-post
---

## 8base

**8base** is a Backend-as-a-Service. It lets front-end developers focus more on what they love and backend developers expedite their workflow. As our CEO likes to say, "it's totally awesome!"

When using 8base, you're project benefits from having:

1. A fully scalable serverless API
2. A managed MySQL Database that's hosted on AWS
3. Ready-to-use app services, like Authentication, Authorization, and File Storage
4. 8base's rock-star team and the Community
5. So, so, so much more!

<https://docs.8base.com/getting-started/getting-started>

## Connect to 8base

### 1. First we go to the 8base [documentation](https://docs.8base.com/getting-started/quick-start) and Clone the Demo Repository

    git clone https://github.com/8base/react-8base-starter-app.git

### 2. Then we go into the project folder and do an npm install

### 3. Configuración del cliente

    APP_WORKSPACE_ENDPOINT=<workspace_endpoint>
    APP_AUTH_PROFILE_ID=<auth_profile_id>
    APP_AUTH_CLIENT_ID=<auth_client_id>
    APP_AUTH_DOMAIN=<auth_domain>

Look for a 8base-starter-app/client/.env file that contains a template for the required environment variables. Fill in the template with all appropriate values. Each starter app will have a thorough READme.md with instructions on which files are responsible for which functionality. Please read them!

### 4. Run the application with the NPM STAR command

## Executing the mutation

```javascript
const TASK_LIST_MUTATION = gql`
  mutation($data: TaskCreateInput!) {
    taskCreate(data: $data) {
      id
    }
  }
`

const USER_LIST_QUERY = gql`
  {
    usersList {
      count
      items {
        id
        firstName
        lastName
        email
      }
    }
  }
`

const NewTaskForm = () => {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [user, setUser] = React.useState(null)

  const [createTask] = useMutation(TASK_LIST_MUTATION)
  const { data, loading } = useQuery(USER_LIST_QUERY)

  const createNewTask = async e => {
    e.preventDefault()
    if (!user || !name || !description) return alert('Invalid Data!')
    const variables = {
      data: {
        name,
        description,
        assignee: { connect: { id: user } },
      },
    }
    try {
      await createTask({ variables })
    } catch (e) {
      console.log(`ERROR:`, e)
    }
    setSuccess(true)
  }

  if (loading) {
    return <h2>Loading...</h2>
  }

  const {
    usersList: { items },
  } = data

  return (
    <div>
      <h1>New Task</h1>
      <span>{success && 'Task Created'}</span>
      <form>
        <p>
          {' '}
          Name: <input
            name={'name'}
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </p>
        <p>
          {' '}
          Description: <input
            name={'description'}
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
        </p>
        <p>
          {' '}
          Assignee:
          <select name={'user'} onChange={e => setUser(e.target.value)}>
            <option value={null}>Select a USER</option>
            {items
              ? items.map((user, i) => {
                  return (
                    <option value={user.id} key={i}>
                      {user.firstName
                        ? `${user.firstName} ${user.lastName}`
                        : user.email}
                    </option>
                  )
                })
              : ''}
          </select>
        </p>
        <button onClick={createNewTask}>CREATE TASK</button>
      </form>
    </div>
  )
}
```

### Filtering

```javascript
const TASK_LIST_QUERY = gql`
  query TaskQuery($filter: TaskFilter) {
    tasksList(filter: $filter) {
      count
      items {
        name
        description
        createdAt
        done
      }
    }
  }
`

const USER_QUERY = gql`
  {
    user {
      id
      email
    }
  }
`

const Tasks = ({ user }) => {
  const { data, loading } = useQuery(TASK_LIST_QUERY, {
    variables: {
      filter: {
        assignee: {
          id: {
            equals: user ? user.id : null,
          },
        },
      },
    },
  })

  if (!user || loading) return null

  const {
    tasksList: { items },
  } = data
  return items.map((task, i) => <p key={i}>{task.name}</p>)
}

const Home = () => {
  const { data, loading } = useQuery(USER_QUERY)
  if (loading === true) return <div className={'loading'}>Loading...</div>

  const { user } = data
  return (
    <div>
      <h1>Tasks!</h1>
      <Tasks user={user} />
    </div>
  )
}
```
