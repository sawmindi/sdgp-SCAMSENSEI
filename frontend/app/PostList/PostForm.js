'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const style = {
  input: 'bg-[#2a2a2b] border border-[#343536] px-4 py-2 text-left text-sm text-white focus:outline-none rounded',
  wrapper: 'flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',
  title: 'text-[#FFFFFF] pb-3 text-lg font-medium',
  PostButton: 'bg-[#4c4c6d] px-4 py-1.5 font-semibold text-white rounded-full hover:bg-[#3c3c5d] focus:outline-none',
  PostButtonContainer: 'flex justify-end pt-2',
  select: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  loading: 'text-white font-semibold',
};

const PostForm = () => {
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const router = useRouter();
  const districts = [
    'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo',
    'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara',
    'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar',
    'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya',
    'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya',
  ];

  const createForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
const title = formData.get('title');
      const name = formData.get('name');
      const district = formData.get('district');
      const scam = formData.get('scam');
      
      await auth.scamPost(name, district, scam,title);

      console.log('Form submitted successfully:');
      toast.success('Form submitted successfully.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.');
    } finally {
      setLoading(false);
      router.push('/PostList')
    }
  };

  return (
    <div className={style.wrapper}>
      {loading && <div className={style.loading}>loading</div>}
      <h1 className={style.title}>Create a Post</h1>
      <form className="flex flex-col space-y-2 rounded p-4" onSubmit={createForm}>
        <label for="website-admin" className="block text-sm font-medium text-gray-900 dark:text-white">Username</label>
  <div className="flex">
    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
      </svg>
    </span>
    <input type="text" placeholder="Name" name="name" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title for your post</label>
    <input type="text" id="text"  name="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select the district where the scam occured</label>

        <select className={style.select} name="district" id='district'>
          <option value="">Select District</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
        <label for="scam" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">The Scam you experienced</label>
  <textarea id="scam" name="scam" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your experience with a scam"></textarea>
        <div className={style.PostButtonContainer}>
        <button className={style.PostButton} type="submit" disabled={loading}>
    {loading ? 'Posting...' : 'Post'}
  </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
