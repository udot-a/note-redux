import React, {useEffect} from 'react';
import {MainLayout} from "./layouts";
import  {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import NoteList from "./pages/noteList/NoteList";
import NoteItem from "./pages/noteItem/NoteItem";
import NoteEdit from "./pages/noteEdit/NoteEdit";
import NotFound from "./components/404/NotFound";
import { useDispatch } from 'react-redux'
import {getData} from "./redux/actions";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route path={"/"} exact>
                <Redirect to={"/notes"}/>
              </Route>

              <Route path={"/create"} exact>
                <NoteEdit/>
              </Route>

              <Route path={"/notes"} exact>
                <NoteList/>
              </Route>

              <Route path={"/edit/:id"} exact>
                <NoteEdit/>
              </Route>

              <Route path={"/note/:id"} exact>
                <NoteItem/>
              </Route>

              <Route path={"*"} >
                <NotFound/>
              </Route>
            </Switch>
          </MainLayout>
        </BrowserRouter>
  );
}

export {App};
