import Button from "../components/ui/Button";
import "../index.css";
const HomePage = () => (
  <div>
    <div>
      <table className="w-full">
        <tbody className="divide-y divide-gray-200 ">
          <tr className="flex justify-between items-center hover hover:bg-blue-50">
            <div>
              <td className="p-2">1</td>
              <td className="p-2">Ahmed</td>
            </div>
            <td className="flex p-2 text-end gap-4 ">
              <Button children="Edit" color="blue" type="submit" />
              <Button children="Delete" color="red" type="submit" />
            </td> 
          </tr>
          <tr className="flex justify-between items-center">
            <div>
              <td className="p-2">1</td>
              <td className="p-2">Ahmed</td>
            </div>
            <td className="flex p-2 text-end gap-4">
              <Button children="Edit" color="blue" type="submit" />
              <Button children="Delete" color="red" type="submit" />
            </td>
          </tr>
          <tr className="flex justify-between items-center">
            <div>
              <td className="p-2">1</td>
              <td className="p-2">Ahmed</td>
            </div>
            <td className="flex p-2 text-end gap-4">
              <Button children="Edit" color="blue" type="submit" />
              <Button children="Delete" color="red" type="submit" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default HomePage;
