import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();
  let error = useRouteError();

  return (
    <div className="wrapper w-full h-full flex justify-center items-center text-center p-5">
      <div>
        <h2 className="text-3xl font-medium text-gray-900">
          Error is Occurred!
        </h2>
        {isRouteErrorResponse(error) && (
          <p className="text-lg text-gray-700 mt-3">
            {error.status} {error.statusText}
          </p>
        )}
        <img className="max-h-96" src="/assets/images/error.jpg" alt="error" />
        <button className="btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}
