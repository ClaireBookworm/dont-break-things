import Head from "../components/head";
import Nav from "../components/nav";
import { GalleryCard } from "../components/card";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="mt-6 sm:mt-12 md:mt-16 flex flex-col text-white pl-12 md:pl-20">
        <section className="heading" aria-hidden="true">
          <div>
            don't break things<div className="inline opacity-50">.</div>
          </div>
        </section>
        <section className="mt-8 md:mt-16 w-2/3 lg:w-1/2 md:text-xl">
          claire wang's work for cs six-thirty: data visualization in winter term. this was a series of fun rabbit holes, frustration, new color schemes, and a love-hate relationship with javascript. (turn off dark mode at the top for some cool colors)
        </section>
      </main>
      <Layout active="Gallery">
        {/* <h2 className="gallerySubhead">Major Projects</h2> */}
        <div className="mt-12 mr-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <GalleryCard
            href="https://midilab.netlify.app/"
            title="MIDI Lab"
            children="Final project for CS630. A web app that allows users to visualize music but... vaporwave."
          />
          <GalleryCard
            href="https://github.com/ClaireBookworm/30daychartchallenge"
            title="30 Day Chart Challenge"
            children="Except it's more like half of it (11+ days). Visualizations of all sorts of data (and some not so much data)."
          />
          <GalleryCard
            href="https://observablehq.com/@clairebookworm/iq"
            title="IQ and Misleading Data"
            children="Is IQ a thing? We think **no**, and prove it by showing how easily we can create misleading graphs and data from some simple finagling and tricks. (*Claire* and *Sofia*)"
          />
          <GalleryCard
            title="1778"
            children="Printing the numbers `17` and `78` in as many ways as possible. (*Chenault*, *Sofia*, *Natalia*, and *Claire*)"
            href="https://github.com/CSC630/group-task-0/tree/main/group-2"
          />
          <GalleryCard
            href="https://github.com/ClaireBookworm/material-bar"
            title="Material Bar"
            children="Using data from the **Addison Gallery of Art** and visualizing the most commonly used materials in the collection. (*Chenault* and *Claire*)"
          />
          <GalleryCard
            title="Extant Visualizations"
            href="https://github.com/ClaireBookworm/politics-tweet-visualization"
            children="There's many facets of data vis, and many ways to display data. We took data from politicians on Twitter and used variables like position, color, shape, value, size, texture, and oritnation. (*Claire*, *Brian*, *Jessica*)"
          />
        </div>
        <br />
        <h2 className="subhead">oh, and also...</h2>
        {/* <br /> */}
        <div className="mt-12 mr-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <GalleryCard
          title="Network: Twitterex"
          href="https://github.com/ClaireBookworm/gephi-twitterex"
          children="Using Gephi to model an undirected bipartite network of Twitter *tag-item* relationships (data from Konect). My computing power could only take so much and I know I won't be using Gephi anytime soon. (*Claire*) "
        />
        <GalleryCard 
          title="Making an *Ugly* Website"
          href="https://github.com/ClaireBookworm/charts-olio"
          children="How bad can web design be? Let's find out. You can follow instructions in the `README.md` to view, but it's not very pretty. (*Claire*)"
        />
        </div>
      </Layout>
      <footer className="text-white mt-8 md:mt-16 pl-12 md:pl-20 mb-5 flex flex-col space-y-4 text-xs sm:text-sm">
        <div id="footnotes" className="font-inter">
          ¹DFTBA: Don’t forget to be awesome!
        </div>
        <div className="font-gilroy uppercase opacity-40">
          Copyright {new Date().getFullYear()} Claire Wang.
        </div>
      </footer>
    </div>
  );
}
