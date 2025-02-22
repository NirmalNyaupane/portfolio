export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 animate-fadeIn">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Nirmal Neupane. All rights reserved.</p>
        <p className="mt-2">
          <a
            href="mailto:neupanenirmal417@gmail.com"
            className="text-emerald-500 hover:underline transition-colors duration-200"
          >
            neupanenirmal417@gmail.com
          </a>{" "}
          |<span className="ml-2">(+977) 9821238476</span>
        </p>
      </div>
    </footer>
  )
}

