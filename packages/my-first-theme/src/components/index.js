import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Book from "./book"
import Review from "./review"
import Loading from "./loading"
import Error from "./error"





const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Head>
                <title>My First Frontity Theme</title>
                <meta
                    name="description"
                    content="Based on the Frontity step by step tutorial"
                />
            </Head>
             <Global
                styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Arial, sans-serif;
          }
        `}
            />
            <Header isPostType={data.isPostType} isPage={data.isPage}>
                <HeaderContent>
                    <h1>Rick Riordan</h1>
                    {
                        state.theme.isUrlVisible ? (
                            <>
                                Current URL: {state.router.link}{" "}
                                <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>
                            </>
                        ) : (
                            <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
                        )
                    }
                    <Menu>
                        <Link link="/">Home</Link>
                        <Link link="/book">Books</Link>
                        <Link link="/review">Reviews</Link>
                        <Link link="/about">About</Link>
                        <Link link="/contact">Contact</Link>
                    </Menu>
                </HeaderContent>
            </Header>
            <Main>
                <Switch>
                <Loading when={data.isFetching} />
                <List when={data.isArchive} />
                <Page when={data.isPage} />
                <Book when={data.isBook} />
                <Review when={data.isReview} />
                <Error when={data.isError} />
            </Switch>
            </Main>
        </>
    )

}

export default connect(Root)
const Header = styled.header`
  background-color: white;


`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`
const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    padding: 25px;
    color: white;
    text-decoration: none;
        :hover {
        cursor: pointer;
        background-color: orange;
      }
  }
  background-color: #3a3b3c;
 
`
const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`


