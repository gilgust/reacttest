import * as React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchSeminar } from './components/FetchSeminar';
import { AddSeminar } from './components/AddSeminar';

export const router = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/fetchemployee' component={FetchSeminar} />
    <Route path='/addemployee' component={AddSeminar} />
    <Route path='/employee/edit/:empid' component={AddSeminar} />
</Layout>;