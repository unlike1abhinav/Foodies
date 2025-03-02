import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
            Deliciuous meals, created{''}
            <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recipe and cook it yourself</p>
        <p className={classes.cta}><Link href='/meals/share'>Share your favourite meal</Link></p>
      </header>
      <main className={classes.main}><MealsGrid meals={[]}/></main>
    </>
  );
};

export default Meals;
