import React from "react";
import Header from "./components/shared-pages/Header";

const Contact = () => {
  return (
    <div>

<body class="bg-gray-100 p-8">
	<div class="max-w-lg mx-auto bg-white 
				rounded-md shadow-md p-6">
		<h1 class="text-2xl font-semibold 
				text-gray-800 mb-4 text-center">
			Contact Form Builder
		</h1>
		<form id="contactForm" onsubmit="submitForm(event)">
			<div class="mb-4">
				<label for="name"
					class="block text-sm font-medium text-gray-700">
					Name
				</label>
				<input type="text" id="name" name="name"
					class="form-input mt-1 block w-full"
					placeholder="Enter your name" required/>
			</div>
			<div class="mb-4">
				<label for="email"
					class="block text-sm font-medium text-gray-700">
					Email
				</label>
				<input type="email" id="email" name="email"
					class="form-input mt-1 block w-full"
					placeholder="Enter your email" required/>
			</div>
			<div class="mb-4">
				<label for="phone"
					class="block text-sm font-medium 
							text-gray-700">
					Phone
				</label>
				<input type="tel" id="phone" name="phone"
					class="form-input mt-1 block w-full"
					placeholder="Enter your phone number" required/>
			</div>
			<div class="mb-4">
				<label for="subject"
					class="block text-sm font-medium text-gray-700">
					Subject
				</label>
				<input type="text" id="subject" name="subject"
					class="form-input mt-1 block w-full"
						placeholder="Enter the subject" required/>
			</div>
			<div class="mb-4">
				<label for="message"
					class="block text-sm font-medium 
							text-gray-700">
					Message
				</label>
				<textarea id="message" name="message"
						class="form-textarea mt-1 block w-full" rows="6"
						placeholder="Enter your message" required>
				</textarea>
			</div>
			<div class="flex items-center justify-between">
				<button type="submit"
						class="px-4 py-2 bg-blue-500 text-white 
							rounded hover:bg-blue-600">
					Submit
				</button>
				<button type="button" onclick="resetForm()"
					class="px-4 py-2 bg-gray-500 text-white 
						rounded hover:bg-gray-600">
					Reset
				</button>
			</div>
		</form>
		<p id="submitMessage"
		class="text-green-500 font-semibold mt-2 hidden">
			Form submitted successfully!
		</p>
	</div>

</body>
       
          </div>
      
  );
};

export default Contact;








