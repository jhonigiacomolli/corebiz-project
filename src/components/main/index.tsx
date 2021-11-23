import { Newsletter } from "components/newsletter";
import { ShowCase } from "components/show-case";
import { Slide } from "components/slide-show/slide";

export const Main = () => {
    return (
        <main>
            <Slide />
            <ShowCase />
            <Newsletter />
        </main>
    );
}