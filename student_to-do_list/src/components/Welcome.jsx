function Welcome({ tasks = [] }) {
    const completed = tasks.filter((task) => task.status === "completed").length;
    const percentage = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

    return (
        <section className="welcome">
            <h1>Welcome to the Student Task Portal</h1>
            
        </section>
    );
}

export default Welcome;