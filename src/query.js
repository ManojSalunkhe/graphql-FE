import { gql } from '@apollo/client'


export const GET_ALL_BLOGS_QUERY = gql`
   query getBlogs {
    getAllBlog{
       id
       title
       body
       userId
    }
   }
`


export const REGISTER_MUTATION = gql`

    mutation register($input : RegisterInput!) {
        registerUser(input : $input) {
           username
           email
           password
       }
    }

`

export const LOGIN_MUTATION = gql`

   mutation login($input : LoginUserInput!){
    loginUser(input : $input) {
        token 
        user {
          email
          password
        }
     }
   }

`