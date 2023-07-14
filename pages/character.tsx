import * as React from "react"
import { useState } from 'react';
import { useLazyQuery, gql } from "@apollo/client";
import UserDetail from '@/details/Details';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SignOutButton } from "@clerk/nextjs";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters($name: String!) {
    characters(filter:{name:$name}) {
      results {
        _id
        name
        avatarSrc
        description
        rank
        village
      }
    }
  }
`;

export default function Character() {
  const [name, setName] = useState('');
  const [getDetails, { loading, error, data }] = useLazyQuery(GET_CHARACTERS);

  //new line
  const [search, setSearch] = useState('')
  //new line
  const handleChange = (e: { target: React.SetStateAction<string>; }) => {
    setSearch(e.target)
  }


  const handleSubmit = (event : React.FormEvent<HTMLFormElement> ) : void => {
    event.preventDefault();
    getDetails({ variables: { name } });
    console.log("Fetching data...", name)
  };
  const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

    const [scrollBar, setScrollBar] = useState(false);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  const client = new ApolloClient({
  uri: "https://narutoql.up.railway.app/graphql",
  cache: new InMemoryCache(),
})

  return (
    <div>
      <ApolloProvider client={client}>
      <form onSubmit={handleSubmit}  className=" mt-[9.77rem]">
        <div className="flex justify-center">
          
        <Input
          className="rounded-md  w-[36.65rem] outline-none max-sm:w-[24.375rem] max-sm:text-xs"
          type="name"
          placeholder="Enter character name"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        </div>

        <div className="pt-5 flex justify-center">
        <Button
          className = "bg-purple-500 text-white hover:bg-purple-700 max-sm:w-[3.937rem] max-sm:text-xs max-sm:h-[2.3rem]"
          type="submit"
          variant="outline">
            search
        </Button>
        </div>
      </form>
      {data?.characters ? <UserDetail user={data.characters.results[0]} /> : null}
      { (loading) && <p>Loading...</p>}
      { (error) && <p>Error: {error.message}</p>}
    
      <SignOutButton/>
      </ApolloProvider>
    </div>
  );
}



