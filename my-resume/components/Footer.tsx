export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center text-custom-text text-sm">
          <p>&copy; {currentYear} Utkarsh Devi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}