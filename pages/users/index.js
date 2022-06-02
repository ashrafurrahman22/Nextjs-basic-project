import Link from 'next/link';
import React from 'react';

const index = ({users}) => {
    return (
        <div>
            <h2>this is users: {users.length} </h2>
            <div>
                {
                    users.map(user => 
                        <div style={{ 'border': '1px solid red', 'padding': '15px', borderRadius: '10px', 'margin': '10px' }}  key={user.id}>
                            <h4>UserName: {user.name}</h4>
                            <Link href={`/users/${user.id}`}>
                                <button>Explore</button>
                            </Link>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res  = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
      props: {users: data}, // will be passed to the page component as props
    }
  }