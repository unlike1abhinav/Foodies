import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

async function MealsSection() {
  const meals = await getMeals()
  return(
  <MealsGrid meals={meals}/>)
}

export default function Meals () {

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
      <main className={classes.main}><Suspense fallback={ <h1 className={classes.loading}>Fetching Meals...</h1>}><MealsSection/></Suspense></main>
    </>
  );
};


