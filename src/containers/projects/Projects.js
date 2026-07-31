import React, {useState, useEffect, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import Loading from "../../containers/loading/Loading";
import {Fade} from "react-reveal";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          const edges = response.data.user.pinnedItems.edges.filter(
            edge => edge.node
          );
          setrepoFunction(edges);
        })
        .catch(function (error) {
          console.log(error);
          setrepoFunction("Error");
          console.log(
            "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
          );
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title section-heading">
            Open Source Projects
          </h1>
          <Fade bottom cascade damping={0.08}>
            <div className="repo-cards-div-main">
              {repo.map((v, i) => {
                return <GithubRepoCard repo={v} key={v.node.id} />;
              })}
            </div>
          </Fade>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
