import MockAdapter from "axios-mock-adapter"
import { AxiosInstance } from "axios"
import apiRoutes from "./apiRoutes"
import carouselImagesSuccess from "./mocks/carousel_images-200-get.json"
import sponsorCategoriesSuccess from "./mocks/sponsors_categories-200-get.json"
import sponsorsSuccess from "./mocks/sponsors-200-get.json"
import teamSuccess from "./mocks/team-200-get.json"
// import documentsSuccess from "./mocks/documents-200-get.json"
import socialNetorksSuccess from "./mocks/social_networks-200-get.json"
import programsSuccess from "./mocks/programs-200-get.json"
import videosSuccess from "./mocks/videos-200-get.json"
import pagesSuccess from "./mocks/cchv_page-200-get.json"
import schoolProgramSuccess from "./mocks/school_program-200-get.json"
import newsSuccess from "./mocks/news-200-get.json"

// In ms
const DELAY = 5000
export default (client: AxiosInstance) => {
  console.log("Setting up mocks", process.env)

  // Set mock adapter on the default axios instance (client)
  var mock = new MockAdapter(client, { delayResponse: DELAY })

  // Home Page
  mock.onGet(apiRoutes.CarouselImages).reply(200, carouselImagesSuccess)

  // Footer
  mock.onGet(apiRoutes.SocialNetworks).reply(200, socialNetorksSuccess)
  mock.onGet(apiRoutes.SponsorsCategories).reply(200, sponsorCategoriesSuccess)
  mock.onGet(apiRoutes.Sponsors).reply(200, sponsorsSuccess)

  // News
  mock.onGet(apiRoutes.News).reply(200, newsSuccess)
  // mock.onGet(apiRoutes.HomeNews).reply(200, newsSuccess)

  // Pages
  mock.onGet(apiRoutes.Pages).reply(200, pagesSuccess)
  mock.onGet(apiRoutes.Documents).reply(200, [])
  mock.onGet(apiRoutes.Team).reply(200, teamSuccess)

  // Programs
  mock.onGet(apiRoutes.Programs).reply(200, programsSuccess)
  mock.onGet(apiRoutes.ProgramVideos).reply(200, videosSuccess)
  mock.onGet(apiRoutes.SchoolPrograms).reply(200, schoolProgramSuccess)
}
