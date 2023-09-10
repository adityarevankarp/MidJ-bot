import card from "./card";
import FormField from "./FormField";
import FileSaver from "file-saver";
import Loader from "./Loader";
export { card, FormField, Loader };
export async function downloadimage(_id, photo) {
  FileSaver.saveAs(photo, "download-${-id}.jpg");
}
