const Dashboard = ({ handleLogin }) => {
    return (
      <div class="dashboard">
        <div>Welcome you are now logged in</div>
        <Button
          onClick={() => handleLogin(false)}
          variant="primary"
        >
          Log Out
        </Button>
      </div>
    );
  };