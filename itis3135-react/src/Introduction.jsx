import Header from "./components/Header";
import Footer from "./components/Footer";
import image from "./images/ayah_mirror.JPG"

export default function Introduction() {
    return (
        <>
            <Header />
            <title>ITIS3135 | Ayah Abdulkareem's | Ambitious Antelope |</title>
            <main>
                <h2>Welcome to My Personal Home Page</h2>
                

                <img src={image} alt="Post-hired mirror picture" style={{ width:"180px"}} />


                <p><strong>Ayah A. Abdulkareem | Ambitious Antelope</strong></p>

                <p>Hi, my name is Ayah. I’m a senior (legally a sophomore since I earned my associate’s degree in high school) majoring in Computer Science with a concentration in Human Computer Interaction. I enjoy spending time with my friends and family, and I love traveling and photography, especially car photography.</p>

                <h3>Personal Background</h3>
                <p>Originally from Iraq, moved to Jordan, and then Charlotte at age 5. I speak Arabic fluently but mainly use it at home.</p>

                <h3>Professional Background</h3>
                <p>Worked as a Director at Chick-fil-A for 3 years, now Events Manager at Rally.</p>

                <h3>Academic Background</h3>
                <p>Senior, Computer Science major, Class of 2025.</p>

                <h3>Primary Computer</h3>
                <p>Apple laptop running macOS, primarily work at home or on campus.</p>

                <h3>Courses I’m Taking & Why</h3>
                <ul style={{ textAlign: "left", maxWidth: "650px", margin: "1rem auto" }}>
                <li><strong>ITIS 4350 – Design Prototyping:</strong> Required course; will teach me how to sketch and prototype on paper.</li>
                <li><strong>ITIS 3135 – Front-End Web Application Development:</strong> Required course; will teach me about web applications.</li>
                <li><strong>ITIS 3130 – Introduction to Human-Centered Computing:</strong> Required course; will teach me how to prioritize user needs, experiences, and ethical considerations.</li>
                <li><strong>ITIS 4353 – Social Technology Design:</strong> Will examine designs for social media platforms and help me understand the social impact of spending at least part of our lives online.</li>
                </ul>

                <blockquote style={{ fontStyle: "italic", margin: "2rem auto", width: "80%" }}>
                "If you expect disappointment, then you can never really get disappointed."  
                — MJ (Spider-Man: No Way Home)
                </blockquote>

            

                <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "#555" }}>
                <em>I acknowledge that any information I post on here will be public. — AA 08/24/2025</em>
                </p>

            </main>
            <Footer />
        </>
    );
}