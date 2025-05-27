import { Spinner } from "flowbite-react";

const SpinnerPage = () =>{
  return (
    <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" aria-label="Default status example" />
    </div>
  );
}

export default SpinnerPage;