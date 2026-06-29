export default function SessionInfo({
    completedSessions,
    isBreak,
}) {
    return (
        <div className="session-info">
            <h3>
                {isBreak ? "Break Time ☕" : "Focus Session 🎯"}
            </h3>

            <p>
                Completed Sessions: {completedSessions}
            </p>
        </div>
    );
}