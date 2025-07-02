export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center text-[#333333] text-sm">
          <p>&copy; {currentYear} Utkarsh Kumawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}