import Head from "next/head";
import Navbar from "../components/Navbar";
import { NavigationLayout } from "../components/NavigationLayout";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <NavigationLayout title={'Home Page'}>
      <Wrapper />
    </NavigationLayout>
  );
}