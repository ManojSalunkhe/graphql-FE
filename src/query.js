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

export const GET_ACCOUNT_QUERY = gql`

      query getAccount {
         getAccountDetails{
             id 
             username
             email
             password
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

export const UPDATE_USER_MUTATION = gql`

      mutation update($input : UpdateInput!){
         updateUser(input : $input){
            id
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