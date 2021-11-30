import {  gql, useLazyQuery, useMutation } from '@apollo/client'


    export  const REGISTER_MUTATION = gql`

    mutation register($input : RegisterInput) {
        registerUser(input : $input) {
           email
           password
       }
    }

`